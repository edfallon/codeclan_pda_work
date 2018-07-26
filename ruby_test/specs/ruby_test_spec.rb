require('minitest/autorun')
require_relative('../testing_task_2.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card_game = CardGame.new
    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("spades", 5)
    @cards = [@card1, @card2]
  end

  def test_check_for_ace()
    assert_equal(true, @card_game.checkforAce(@card1))
  end

  def test_highest_card()
    assert_equal("spades", @card_game.highest_card(@card1, @card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 6", @card_game.cards_total(@cards))
  end




end #end of class
