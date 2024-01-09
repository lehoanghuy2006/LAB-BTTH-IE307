import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';

const fruits_vegetables = [
  {
    title: 'Fruits',
    url:
      'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4',
    data: ['Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple'],
  },
  {
    title: 'Vegetables',
    url:
      'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop',
    data: ['Carrot', 'Broccoli', 'Spinach', 'Beets & Beet Greens', 'Kale'],
  },
];

const workouts = [
  {
    id: '1',
    type: 'Push-ups',
  },
  {
    id: '2',
    type: 'Squats',
  },
  {
    id: '3',
    type: 'Planks',
  },
  {
    id: '4',
    type: 'Groiner',
  },
  {
    id: '5',
    type: 'Spider Crawl',
  },
  {
    id: '6',
    type: 'Glute Bridge',
  },
  {
    id: '7',
    type: 'Dumbbell rows',
  },
  {
    id: '8',
    type: 'Burpees',
  },
  {
    id: '9',
    type: 'Standing Long Jump',
  },
  {
    id: '10',
    type: 'Lunges',
  },
];

//20521267 Cao Hải Hà
export default function App() {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleWorkoutSelection = (id) => {
    if (selectedWorkouts.includes(id)) {
      setSelectedWorkouts(selectedWorkouts.filter((item) => item !== id));
    } else {
      setSelectedWorkouts([...selectedWorkouts, id]);
    }
  };

  const toggleItemSelection = (sectionTitle, item) => {
    const selectedItem = { section: sectionTitle, item };
    const isItemSelected = isSelected(selectedItem);

    if (isItemSelected) {
      setSelectedItems(selectedItems.filter((i) => !isEqual(i, selectedItem)));
    } else {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const isSelected = (item) => {
    return selectedItems.some((i) => isEqual(i, item));
  };

  const isEqual = (item1, item2) => {
    return item1.section === item2.section && item1.item === item2.item;
  };

  const getSelectedWorkoutTitles = () => {
    const selectedWorkoutTitles = selectedWorkouts.map((id) => {
      const workout = workouts.find((w) => w.id === id);
      return workout ? workout.type : '';
    });
    return selectedWorkoutTitles.join(', ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headTitle}>
        <Text style={styles.headerText}>FlatList - Workouts</Text>
      </View>
      <ScrollView>
        <ImageBackground
          source={{
            uri:
              'https://product.hstatic.net/1000308068/product/phong_gym_o_quang_dong_2_6940d51973d6483889152826ad2ce79f_master.jpg',
          }}
          style={styles.bgImg}
        >
          <FlatList
            data={workouts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.selectContain}>
                <Text style={styles.itemText}>{item.type}</Text>
                <TouchableOpacity
                  onPress={() => toggleWorkoutSelection(item.id)}
                  style={[
                    styles.itemContainer,
                    selectedWorkouts.includes(item.id) && styles.selectedItem,
                  ]}
                >
                  <Text style={styles.selectionText}>
                    {selectedWorkouts.includes(item.id) ? 'SELECTED' : 'DESELECT'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ImageBackground>
      </ScrollView>

      <View style={styles.headTitle}>
        <Text style={styles.headerText}>SectionList - Fruits & Vegetables</Text>
      </View>
      <ScrollView>
        <ImageBackground
          source={{
            uri:
              'https://hips.hearstapps.com/hmg-prod/images/heart-healthy-food-1580231690.jpg',
          }}
          style={styles.bgImg}
        >
          <SectionList
            sections={fruits_vegetables}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, section }) => (
              <View style={styles.selectContain}>

                <Text style={styles.itemText}>{item}</Text>
                <TouchableOpacity
                  onPress={() => toggleItemSelection(section.title, item)}
                  style={[
                    styles.itemContainer,
                    isSelected({ section: section.title, item }) &&
                    styles.selectedItem,
                  ]}
                >
                  <Text style={styles.selectionText}>
                    {isSelected({ section: section.title, item })
                      ? 'SELECTED'
                      : 'DESELECT'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
               
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
                 <Image
                  source={{ uri: section.url }}
                  style={styles.sectionImage}
                />
              </View>
            )}
          />
        </ImageBackground>
      </ScrollView>

      <View style={styles.selectedItemsContainer}>
        <Text style={styles.selectedItemsText}>
          <Text style={styles.selectedItemsTextTitle}>Selected Workouts: </Text>
          {getSelectedWorkoutTitles()}
          {selectedItems.map((i) => `${i.item}`).join(', ')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectContain: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  headTitle: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'blue',
  },

  itemContainer: {
    backgroundColor: '#037bfc',
  },
  selectedItem: {
    backgroundColor: '#037bfc',
  },
  itemText: {
    fontSize: 16,
    paddingRight: 30,
  },
  selectionText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  selectedItemsContainer: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    padding: 14,
  },
  selectedItemsText: {
    fontSize: 16,
  },
  selectedItemsTextTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 10,
  },
  sectionImage: {
    width: 40,
    height: 40,
    marginLeft: 58,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
});