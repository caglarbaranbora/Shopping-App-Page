import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

const Card = ({products}) => {

const isStockAvaliable = products.inStock ;

// const SideBySideImages = ({products}) => {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <Image
//           source={{uri: products.imgURL}}
//         />
//         <Image
//           source={{uri: products.imgURL}}
//         />
//         {/* Add more Image components here for additional images */}
//       </View>
//     );
//   };

    return(
        <View style = {styles.card_main}>
            <View style = {styles.card_body}>
                <View>
                    <Image style = {styles.image_container} source={{uri: products.imgURL}}/>
                </View>
                <Text style = {styles.title_text}>{products.title}</Text>
                <Text style = {styles.price_text}>{products.price}</Text>
                <View>
                    {isStockAvaliable ? (
                    <Text ></Text>
                    ) : (
                    <Text style = {styles.status_text}>NO STOCK</Text>
                    )}
                </View>
            </View>
        </View>
    );
}

export default Card;


