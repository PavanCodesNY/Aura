import {
  Framework,
  FrameworkId,
  FrameworkTemplate,
  FrameworkManagerState,
  FrameworkError,
} from "../types/framework";
import {
  frameworks,
  DEFAULT_FRAMEWORK,
  getAllFrameworks,
  getFramework,
  isValidFrameworkId,
} from "../data/frameworks";
import { multiFrameworkTemplates } from "../data/multiFrameworkTemplates";

class FrameworkManager {
  private state: FrameworkManagerState;
  private listeners: Set<(state: FrameworkManagerState) => void> = new Set();
  private readonly STORAGE_KEY = "aura-selected-framework";

  constructor() {
    this.state = {
      currentFramework: this.loadPersistedFramework(),
      availableFrameworks: getAllFrameworks(),
      isLoading: false,
      error: undefined,
    };
  }

  // Get current framework
  getCurrentFramework(): Framework {
    return this.state.currentFramework;
  }

  // Set current framework
  setFramework(frameworkId: FrameworkId): void {
    try {
      this.setState({ isLoading: true, error: undefined });

      if (!isValidFrameworkId(frameworkId)) {
        throw new FrameworkError(
          `Invalid framework ID: ${frameworkId}`,
          frameworkId,
          "setFramework"
        );
      }

      const framework = getFramework(frameworkId);

      // Validate framework is available
      if (!this.state.availableFrameworks.find((f) => f.id === frameworkId)) {
        throw new FrameworkError(
          `Framework ${frameworkId} is not available`,
          frameworkId,
          "setFramework"
        );
      }

      this.setState({
        currentFramework: framework,
        isLoading: false,
        error: undefined,
      });

      // Persist selection
      this.persistFramework(frameworkId);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.setState({
        isLoading: false,
        error: errorMessage,
      });

      // Log error for debugging
      console.error("FrameworkManager: Failed to set framework", error);

      // Fallback to previous framework or default
      if (this.state.currentFramework.id !== DEFAULT_FRAMEWORK.id) {
        console.warn("FrameworkManager: Falling back to default framework");
        this.setFramework(DEFAULT_FRAMEWORK.id);
      }
    }
  }

  // Get all available frameworks
  getAvailableFrameworks(): Framework[] {
    return this.state.availableFrameworks;
  }

  // Get a specific template for a component and framework
  getTemplate(
    componentId: string,
    frameworkId: FrameworkId
  ): FrameworkTemplate | null {
    try {
      const template = multiFrameworkTemplates[componentId];
      if (!template) {
        console.warn(`Component template not found: ${componentId}`);
        return null;
      }

      const frameworkTemplate = template.frameworks[frameworkId];
      if (!frameworkTemplate) {
        console.warn(
          `Framework template not found: ${componentId} for ${frameworkId}`
        );
        return null;
      }

      return frameworkTemplate;
    } catch (error) {
      console.error(
        `Error getting template for ${componentId}:${frameworkId}:`,
        error
      );
      return null;
    }
  }

  // Get current state
  getState(): FrameworkManagerState {
    return { ...this.state };
  }

  // Subscribe to state changes
  subscribe(listener: (state: FrameworkManagerState) => void): () => void {
    this.listeners.add(listener);

    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  // Register a new framework (for extensibility)
  registerFramework(framework: Framework): void {
    try {
      // Validate framework
      if (!framework.id || !framework.name || !framework.extension) {
        throw new FrameworkError(
          "Invalid framework configuration",
          framework.id,
          "registerFramework"
        );
      }

      // Check if framework already exists
      if (this.state.availableFrameworks.find((f) => f.id === framework.id)) {
        throw new FrameworkError(
          `Framework ${framework.id} already registered`,
          framework.id,
          "registerFramework"
        );
      }

      this.setState({
        availableFrameworks: [...this.state.availableFrameworks, framework],
      });
    } catch (error) {
      console.error("FrameworkManager: Failed to register framework", error);
      throw error;
    }
  }

  // Remove a framework (for extensibility)
  unregisterFramework(frameworkId: FrameworkId): void {
    try {
      const updatedFrameworks = this.state.availableFrameworks.filter(
        (f) => f.id !== frameworkId
      );

      if (updatedFrameworks.length === this.state.availableFrameworks.length) {
        throw new FrameworkError(
          `Framework ${frameworkId} not found`,
          frameworkId,
          "unregisterFramework"
        );
      }

      // If removing current framework, switch to default
      let newCurrentFramework = this.state.currentFramework;
      if (this.state.currentFramework.id === frameworkId) {
        newCurrentFramework = DEFAULT_FRAMEWORK;
        this.persistFramework(DEFAULT_FRAMEWORK.id);
      }

      this.setState({
        availableFrameworks: updatedFrameworks,
        currentFramework: newCurrentFramework,
      });
    } catch (error) {
      console.error("FrameworkManager: Failed to unregister framework", error);
      throw error;
    }
  }

  // Reset to default framework
  reset(): void {
    this.setFramework(DEFAULT_FRAMEWORK.id);
    this.clearPersistedFramework();
  }

  // Private methods
  private setState(updates: Partial<FrameworkManagerState>): void {
    this.state = { ...this.state, ...updates };
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.getState());
      } catch (error) {
        console.error("FrameworkManager: Error in state listener", error);
      }
    });
  }

  private loadPersistedFramework(): Framework {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && isValidFrameworkId(stored)) {
        return getFramework(stored);
      }
    } catch (error) {
      console.warn(
        "FrameworkManager: Failed to load persisted framework",
        error
      );
    }
    return DEFAULT_FRAMEWORK;
  }

  private persistFramework(frameworkId: FrameworkId): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, frameworkId);
    } catch (error) {
      console.warn(
        "FrameworkManager: Failed to persist framework selection",
        error
      );
    }
  }

  private clearPersistedFramework(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.warn(
        "FrameworkManager: Failed to clear persisted framework",
        error
      );
    }
  }
}

// Create singleton instance
export const frameworkManager = new FrameworkManager();

// Export class for testing
export { FrameworkManager };
