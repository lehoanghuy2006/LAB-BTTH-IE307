import React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import InteractiveButtons from './InteractiveButtons';

const Post = ({ post, handleOnCommentClick, handleOnLikeClick, handleOnShareClick }) => {

    return (
        <View style={styles.post}>
            <View style={styles.postHeader}>
                <Image source={{ uri: post.avatar }} style={styles.profileImage} />
                <Text style={styles.text}>{post.username}</Text>
            </View>
            <Text>{post.text}</Text>
            <Image source={{ uri: post.image }} style={styles.contentImage} />
            <View style={styles.statContainer}>
                <Text><Text>{post.likes}</Text> Likes</Text>
                <Text><Text>{post.comments}</Text> Comments</Text>
                <Text><Text>{post.shares}</Text> Shares</Text>
            </View>

            <View style={styles.horizontalLine} />

            <InteractiveButtons
                post={post}
                handleOnCommentClick={handleOnCommentClick}
                handleOnLikeClick={handleOnLikeClick}
                handleOnShareClick={handleOnShareClick}
            />
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginVertical: 10,
    },
    post: {
        flex: 1,
        padding: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    postHeader: {
        flexDirection: 'row',
    },
    contentImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
});