import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';

// Lý thuyết
// Các biến cục bộ không tồn tại giữa các lần render
// và các thay đổi đối với biến cục bộ không kích hoạt re-render

// State ra đời
// Hook useState: Cung cấp 2 thứ
// 1. Một biến có thể lưu giá trị giữa các lần render
// 2. Một hàm để cập nhật giá trị của biến và kích hoạt re-render

// Tóm lại:
// 1. Props: Là dữ liệu được truyền cho component
// 2. State: Là 1 bộ lưu trữ dữ liệu cá nhân của riêng component

// Dùng khi nào?
// 1. Dùng Props để trừu tượng hóa các components để
// có thể tái sử dụng ở các nơi khác nhau và truyền dữ liệu

// 2. Dùng State khi component cần ghi nhớ thông tin nào đó
// dữ liệu bên trong component có thể thay đổi bởi chính nó

const postsData = [
    {
        id: 1,
        avatar: 'https://reactnative.dev/img/logo-og.png',
        username: 'Traveler',
        text: 'Exploring... 😀 😃 😄',
        image: 'https://reactnative.dev/img/logo-og.png',
        likes: 123,
        comments: 456,
        shares: 789,
    },
    {
        id: 2,
        avatar: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png',
        username: 'UIT',
        text: 'Hello UIT',
        image: 'https://www.uit.edu.vn/sites/vi/files/banner_uit.png',
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

    };

    const handleOnShareClick = (postId) => {

    };

    return (
        <ScrollView style={styles.container}>
            <Header />

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