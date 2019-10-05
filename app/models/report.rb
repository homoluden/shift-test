class Report < ApplicationRecord
    has_one_attached :file

    validates :title, :presence => true, :uniqueness => true, :length => { in: 3..10 }
end
