require 'test_helper'

class DemoTest < ActiveSupport::TestCase
  test 'the truth' do
    assert true
  end

  test 'instantiate product' do
    p = Demo.create
    p.save!
    pp p.attributes
    pp p.id

    assert true
  end
end
