function solution(command) {


    if (command == `upvote`) {
        this.upvotes += 1
    } else if (command == `downvote`) {
        this.downvotes += 1
    } else if (command == `score`) {

    }




}



let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
