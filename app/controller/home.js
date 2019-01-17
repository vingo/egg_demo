const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hello wrold'
        
    }
    async list() {
        const dataList = await this.service.tags.list()
        console.log('>>>>>>>>>: ',dataList)
        await this.ctx.render('list.tpl', {list:dataList});
    }
    async demo() {
        await this.ctx.render('home.ejs', {message:'home page'});
    }
}
module.exports = HomeController