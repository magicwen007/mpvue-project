import Mock from 'mockjs';

const random = Mock.Random;

const mockTable = {
  '/topics': () => Mock.mock([{
    author: {
      loginname: random.name(),
    },
  }]),
};

const getMockData = api => ({ success: true, data: mockTable[api]() });

export default getMockData;
