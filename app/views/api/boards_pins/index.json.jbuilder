@boardspins.each do |boardspin|
    json.set! boardspin.id do
        json.partial! "api/boards_pins/boards_pins", boardspin: boardspin
    end
end