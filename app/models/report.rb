class Report < ApplicationRecord
    has_one_attached :file

    validates :title, :presence => true, :uniqueness => true
end
