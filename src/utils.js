const TASK_KEY = 'tasks';

export const loadTasks = () => {
  try {
    const saved = localStorage.getItem(TASK_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load tasks:', e);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks:', e);
  }
};
