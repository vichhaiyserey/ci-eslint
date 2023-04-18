test('resolves to name', () => {
    // make sure to add a return statement
    return expect(Promise.resolve('name')).resolves.toBe('name');
  });