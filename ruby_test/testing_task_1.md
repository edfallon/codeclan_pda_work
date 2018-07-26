### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# This will fail because it needs == instead of =
  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
# this will fail because you need to return card1.suit not card.name. Also it says dif instead of def and there is one too many ends.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# This will fail because you haven't defined what total is. Return also needs to be moved below the end and the total should be in #{total}
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
