import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appContainer: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f9fdff'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fdff',
    height: 50,
    borderBottomColor: '#cbcbcb',
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 25,
    color: '#333333',
    fontWeight: 'bold'
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fdff',
    height: 40,
    borderTopColor: '#cbcbcb',
    borderTopWidth: 1
  },
  footerText: {
    fontSize: 30,
    color: '#333333'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    height: 70,
    flex: 1
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3
  },
  label: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 2,
    color: '#494949'
  },
  error: {
    paddingTop: 5,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  modalText: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  vCenter: {
    flex: 1,
    justifyContent: 'center'
  },
  welcome: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    alignSelf: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
