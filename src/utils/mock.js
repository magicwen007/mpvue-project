import Mock from 'mockjs';

const random = Mock.Random;
const time = 500;

const mockTable = {
  '/topics': () => Mock.mock([{
    author: {
      loginname: random.name(),
    },
  }]),
};

const getMockData = api => new Promise((resolve, reject) => {
  if (Object.keys(mockTable).some(mockApi => mockApi === api)) {
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      resolve({ success: true, data: mockTable[api]() });
    }, time);
  } else {
    reject(new Error('api未注册'));
  }
});

export default getMockData;
