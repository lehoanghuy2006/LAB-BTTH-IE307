import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';


const postsData = [
    {
        id: 1,
        avatar: 'https://vcdn-vnexpress.vnecdn.net/2021/03/02/103650164-731814290963011-1374-5806-7233-1614677857.jpg',
        username: 'Meo Cute',
        text: 'Khoảnh khắc hài hước của những chú mèo phần 1',
        image: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-08/a3_3.jpg',
        likes: 123,
        comments: 456,
        shares: 789,
    },

    {
      
        id: 2,
        avatar: 'https://vcdn-vnexpress.vnecdn.net/2021/03/02/103650164-731814290963011-1374-5806-7233-1614677857.jpg',
        username: 'Meo Cute',
        text: 'Khoảnh khắc hài hước của những chú mèo phần 2',
        image: 'https://kenh14cdn.com/2019/8/19/photo-1-15661797434762102672631.jpg',
        likes: 111,
        comments: 555,
        shares: 9876,
    },
];

const Demo28_09 = () => {
    const [posts, setPosts] = useState([...postsData]);

    const handleOnCommentClick = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: post.comments + 1,
                };
            }
            return post;
        });

        setPosts(updatedPosts);
    };

    const handleOnLikeClick = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    });
  
    setPosts(updatedPosts);
  }

    const handleOnShareClick = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          shares: post.shares + 1,
        }
      }
      return post;
    });

    setPosts(updatedPosts);
  }

    return (
        <ScrollView style={styles.container}>
            <Header appName="Review the Coffee" />

            <View style={styles.feed}>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        handleOnCommentClick={handleOnCommentClick}
                        handleOnLikeClick={handleOnLikeClick}
                        handleOnShareClick={handleOnShareClick}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Demo28_09;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    feed: {
        flex: 1,
    },
});