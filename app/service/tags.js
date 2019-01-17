const Service = require('egg').Service
class TagsService extends Service {
    async list(page = 1) {
        const {serverUrl, pageSize} = this.config.tag
        const {data, code} = await this.ctx.curl(serverUrl,{size: pageSize, dataType: 'json'})
        const tags = (data.data.data|| []).map(tag => {
            return {id: tag.id, name: tag.tag, time: tag.created_at}
        })
        return tags
    }
}
module.exports = TagsService; 