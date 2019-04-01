const request = require('request')
const {Command, flags} = require('@oclif/command')

class AddCommand extends Command {
  async run() {
    const url = 'https://www.toggl.com/api/v8/time_entries'

    const {flags: {date}} = this.parse(AddCommand)
    const res = await request({url, json: true})
  }
}

AddCommand.description = `Add a new entry
...
Adds a new entry for today
`

AddCommand.flags = {
  date: flags.string({char: 'n', description: 'Date'}),
}

module.exports = AddCommand
