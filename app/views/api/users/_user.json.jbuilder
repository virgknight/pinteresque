json.extract! user, :id, :email, :username, :first_name, :last_name, :short_bio, :pronouns, :display_name
json.photoUrl url_for(user.avatar) if user.avatar.attached?