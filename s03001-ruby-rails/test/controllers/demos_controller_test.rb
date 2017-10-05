require 'test_helper'

class DemosControllerTest < ActionDispatch::IntegrationTest
  test 'the truth' do
    assert true
    d = Demo.create
    d.save
  end
end
