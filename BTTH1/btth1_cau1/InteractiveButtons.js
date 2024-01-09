import React from 'react';

import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const InteractiveButtons = ({ post, handleOnCommentClick, handleOnLikeClick, handleOnShareClick }) => {

    return (
        <View style={styles.interactiveContainer}>
            {/* Likes Button */}
            <CustomButton
                post={post}
                image={require('./assets/snack-icon.png')}
                text="Likes"
                handleOnClick={handleOnLikeClick}
            />

            {/* Comments Button */}
            <CustomButton
                post={post}
                image={require('./assets/snack-icon.png')}
                text="Comments"
                handleOnClick={handleOnCommentClick}
            />

            {/* Likes Button */}
            <CustomButton
                post={post}
                image={require('./assets/snack-icon.png')}
                text="Shares"
                handleOnClick={handleOnShareClick}
            />
        </View>
    );
};

export default InteractiveButtons;

const styles = StyleSheet.create({
    interactiveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});