json.follows do 
    @follows.each do |follow|
        json.set! follow.id do
            json.partial! "api/follows/follow", follow: follow
        end
    end
end
json.users do 
    @follows.each do |follow|
        user = follow.follower
        json.set! user.id do
            json.extract! user, :id, :username, :short_bio, :pronouns, :display_name
            json.photoUrl url_for(user.avatar) if user.avatar.attached?
        end
    end
end