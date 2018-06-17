class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def get_name
    puts self.name
    @name
  end

  def self.age
    return 18
  end

  def age
    return 20
  end

  class << self
    def age
      return 36
    end
  end
  
end

p = Person.new("alican")
name = p.get_name
puts Person.age
puts p.age
