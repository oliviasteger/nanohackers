class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.column :url, :string
      t.column :user, :string
    end
  end
end
