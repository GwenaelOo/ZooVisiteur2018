import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import BlogItem from './BlogItem'
import LargeSeparator from '../Common/Separator/LargeSeparator';
import { RkCard } from 'react-native-ui-kitten';

class BlogWidget extends React.Component {
    state = {
    }

    render() {
        let articlesList = this.props.articlesData;

        console.log(articlesList)

        let list = []

        for (let aticle in articlesList) {

           if(articlesList[aticle].articleStatus.prod === true){
                let articleData = {
                    articleContentHTML: articlesList[aticle].articleContentHTML,
                    articleCreatedByNameToDisplay: articlesList[aticle].articleCreatedByNameToDisplay,
                    articleTitle: articlesList[aticle].articleTitle,
                    articleCreationDate: articlesList[aticle].articleCreationDate,
                    articleId: articlesList[aticle].articleCreationDate,
                };
                list.push(articleData);
            }
        }

        return (
            <View>
                <LargeSeparator text='Actualité de l enclos'/>
                <ScrollView horizontal={true}>
                    <View style={styles.galleryContainer}>
                        {
                            list.map(function (article) { return <BlogItem articleData={article} key={article.articleId} />; })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default BlogWidget

const styles = StyleSheet.create({
    title: {
        flex: 1,
        marginTop: 25,
        marginBottom: 15,
        textAlign: 'center',
        color: '#5E7FB1',
        fontSize: 35,
    },

    galleryContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    galleryItem: {
        marginLeft: 10
    }
})
