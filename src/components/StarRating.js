import React, {Component} from 'react';

class StarRating extends Component {
    render() {

        function GetStars(rating) {
            let stars = [];
            if(rating === undefined || rating === null) {
                return stars;
            }
            for(let i = 0;i<rating;i++) {
                stars.push(i);
            }
            return stars;
        }

        const starList = GetStars(this.props.rating).map((star) => {
            return <span key={star}>*</span>
        });

        return (
            <span>
                {starList}
            </span>
        );
    }
}

//export default connect(mapStateToProps)(StarRating);
export default StarRating;