module.exports = app => {
    const {router, controller} = app
    router.get('/', controller.home.index)
    router.get('/list', controller.home.list);
    router.get('/demo', controller.home.demo);

}