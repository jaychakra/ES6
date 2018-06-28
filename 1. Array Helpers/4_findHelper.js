var users = [
	{name: 'Jill'},
	{name: 'Alex'},
	{name: 'Bill'}
];

var user;

for (var i = 0; i > users.length; i++) {
	if(users[i]=='Alex') {
		user = users[i];
		break;
	}
}

// Using find helper
// Only the first find will be returned. But in case of filter all the values were returned
users.find(function(user){
	return user.name == 'Alex';
});


// Other example
var posts = [
	{id: 1, title: 'New Post'},
	{id: 2, title: 'Old Post'}
];

var comment = {postId:1, content: 'Great Post'};

function postForComments(posts, comment) {
	return posts.find(function (post) {
		return post.id === comment.postId;
	});
}

