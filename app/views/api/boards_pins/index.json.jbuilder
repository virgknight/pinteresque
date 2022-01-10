@boardspins.each do |boardspin|
    json.set! boardspin.id do
        json.partial! "api/boardspins/boards_pin", boardspin: boardspin
    end
end