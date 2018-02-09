class Category < ApplicationRecord
  belongs_to :user
  has_many :products
  validates :name, presence: true, length: { minimum: 3, maximum: 25 }
  validates :description, presence: true, length: { maximum: 25 } 
end