import { StyleSheet } from 'react-native'
import colors from '../theme/colors';
import fontsFamily from '../theme/fonts';

const globalStyle = StyleSheet.create({

  label: {
    fontSize: 14,
    fontFamily: fontsFamily.RUBIK_REGULAR
  },
  error: {
    color: "red",
    fontSize: 9,
    marginTop: -8,
    marginBottom: 5
  },
  inputWrapper: {
    marginBottom: 10
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 0,
    fontFamily: fontsFamily.RUBIK_MEDIUM
  },
  sectionTitle: {
    fontFamily: fontsFamily.RUBIK_MEDIUM,
    color: colors.GREY,
    marginVertical: 10,
    // fontSize:16
  },
  button: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 10,
    shadowOffset: { width: 3, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  cancel: {
    backgroundColor: "white"
  },
  save: {
    backgroundColor: "#008AFF"
  },
  btnText: {
    fontSize: 14,
    textTransform: "capitalize",
    fontFamily: fontsFamily.RUBIK_REGULAR
  },
  editIcon: {
    alignSelf: "flex-end",
    width:30,
    height:30
}

})

export default globalStyle;