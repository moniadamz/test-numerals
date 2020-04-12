export = {
    createInterface: jest.fn().mockReturnValue({
      question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb("XX")),
      close: jest.fn().mockImplementationOnce(() => undefined)
    })
  }