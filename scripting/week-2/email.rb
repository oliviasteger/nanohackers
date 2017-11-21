require 'sendgrid-ruby'
include SendGrid

data = JSON.parse('{
  "personalizations": [
    {
      "to": [
        {
          "email": "inspectorelement@gmail.com"
        }
      ],
      "subject": "I live for pizza"
    }
  ],
  "from": {
    "email": "msteger@steger-law.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "I LOVE PIZZA AND I LIVE FOR PIZZA"
    }
  ]
}')

sg = SendGrid::API.new(api_key: ENV['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'])
response = sg.client.mail._("send").post(request_body: data)
puts response.status_code
puts response.body
puts response.headers
