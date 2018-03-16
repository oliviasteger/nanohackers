json.extract! comment, :id, :user, :content, :post_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
