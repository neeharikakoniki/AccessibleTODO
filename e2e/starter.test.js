describe('Todo App E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should add a todo', async () => {
    await element(by.id('add-todo-input')).tap();
    await element(by.id('add-todo-input')).typeText('Write Detox tests');
    await element(by.id('add-button')).tap();
    await expect(element(by.text('Write Detox tests'))).toBeVisible();
  });
});
