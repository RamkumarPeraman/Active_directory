import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  async model() {
    try {
      const response = await fetch('http://localhost:8080/api/users');
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.users = model;
  }
}