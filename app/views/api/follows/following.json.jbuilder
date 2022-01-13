json.follows do
    @follows.each do |follow|
        json.set! follow.id do
            json.partial! "api/follows/follow", follow: follow
        end
    end
end
json.users do
    @user.followed_users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username, :short_bio, :pronouns, :display_name
            json.photoUrl url_for(user.avatar) if user.avatar.attached?
        end
    end
end
json.boards do
    @user.followed_boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :name
        end
    end
end