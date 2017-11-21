class Photo < ActiveRecord::Base
  validates :url, presence: true
  validates :user, presence: true
end
