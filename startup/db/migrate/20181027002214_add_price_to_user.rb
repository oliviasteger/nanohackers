class AddPriceToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :price, :string
  end
end
