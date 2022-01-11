json.boards do 
    @boards.each do |board|
        json.set! board.id do
            json.partial! "api/boards/board", board: board
        end
    end
end
json.boards_pins do
    @boards.each do |board|
        board.pinassignments.each do |bp|
            json.set! bp.id do
                json.partial! "api/boards_pins/boards_pins", boardspin: bp
            end
        end
    end
end
json.pins do
    @boards.each do |board|
        board.pins.each do |pin|
            json.set! pin.id do
                json.partial! "api/pins/pin", pin: pin
            end
        end
    end
end