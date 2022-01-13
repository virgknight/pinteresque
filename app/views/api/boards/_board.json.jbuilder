json.extract! board, :id, :owner_id, :name, :description

if board.pins.length > 0
    first_img = board.pins[0]
    json.photoUrl url_for(first_img.photo)
end