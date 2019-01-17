exports.keys = "this is the key of project"
exports.view = {
    defaultExtension: '.html',
    mapping: {
        '.ejs': 'ejs',
        '.tpl': 'nunjucks',
    }
}
// 添加 tag 的配置项
exports.tag = {
    pageSize: 5,
    serverUrl: 'http://test1.share-service.share.imissmiss.cn/api/material/getTag?token=4814HPJTRzaEPuv8Z_17D6z4wOZS21iNDIA28r6UHjGVTUMvkWf74OW5aMtBfwji6eHBBlOQGcPO5R_f9xo_yQNl&dtu=200&page=1&dev=1&size=10',
};

// add middleware robot
exports.middleware = [
    'robot'
];
// robot's configurations
exports.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };