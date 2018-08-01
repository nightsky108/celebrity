import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, 
	Image, ImageBackground, TextInput, NavigationBar, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native';
import BottomImage2 from '../BottomImage2';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } 
	from 'react-native-nav-1';
import Modal from 'react-native-modal';
import SubscriberLogin from './SubscriberLogin';
import Home from '../home/Home';


export default class SubscriberPhotoCategories extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => ({
    header: null,
  });

	constructor(props) {
    super(props)
    this.state = {
				visibleModal: false,
				
    }
  }
  
  _goToPhotoCategories = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('PhotoCategories')
	}

	_goToCatcherAuction = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('CatcherAuction')
	}

	_goToCatcherEventList = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('CatcherEventList')
	}

	_goToCatcherDashboard = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('CatcherDashboard')
	}

	_goToCatcherProfile = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('CatcherDetail')
	}

	_goToCatcherLatestUpdate = () => {
		this.setState({ visibleModal: false });
		this.props.navigation.navigate('All')
	}

	_goToCatcherLogout = () => {
		this.setState({ visibleModal: false });

		fetch('http://celebritycatcher.com/api/v1/logout', {
			 method: 'GET',
			//  body:  JSON.stringify(data),
			 headers: {
				'Content-Type' : 'application/json',
			 },
		})
		.then((response) =>  response.json())
		.then((responseJson) => {
			console.log('============', responseJson);
			
			if(responseJson.success === true) {
				Keyboard.dismiss();

				this.props.navigation.navigate('Home')
				
			}	else {
				alert(responseJson.message);				
			}
		})
		.catch((error) => {
			 console.error(error);
		});

	}

	render() {
		return(
			<View style={styles.container}  >
        
				<ImageBackground style={{}}
								source={require('../../images/nav-bg-1.png')}	>
					<NavBar style={{}}>
						<NavGroup style={{}}>
							<NavButton onPress={() => this.setState({ visibleModal: true })}>
								<NavButtonText style={{color: '#7dddc2'}}>
									<Image style={styles.optionImage}
											source={require('../../images/option-icon.png')}	/>
								</NavButtonText>
							</NavButton>
						</NavGroup>

						<View style={{alignItems: 'center'}}>
							<NavTitle style={{marginLeft: -35}}>
								{"Auction Categories"}
							</NavTitle>
						</View>

						<NavTitle style={{}}>
						</NavTitle>
					</NavBar>
				</ImageBackground>

				<View style={styles.container1}>
					<View style={styles.imageView}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Athletes')} style={{borderRadius: 5}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-1.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-1.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Athletes</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
						
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Celebrities')} style={{borderRadius: 5}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-2.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-2.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Celebrities</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

					</View>

					<View style={styles.imageView}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Musicians')} style={{borderRadius: 5}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-3.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-3.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Musicians</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => this.props.navigation.navigate('Rappers')} style={{borderRadius: 5}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-4.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-4.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Rappers</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

					</View>

					<View style={styles.imageView}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Fashion')} style={{borderRadius: 5, zIndex: 1}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-5.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-5.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Fashion</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => this.props.navigation.navigate('Others')} style={{borderRadius: 5}}>
							<ImageBackground style={styles.personImage} imageStyle={{ borderRadius: 5 }}
								source={require('../../images/category-photo-6.png')}	>
								<View style={styles.personImageContent}>
									<Image style={styles.itemCenterImage}
										source={require('../../images/category-photo-6.png')}	/>
									<Text style={{color: 'white', fontSize: 20}}>Other's</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>

					</View>

				</View>

				<BottomImage2 />

				{/* === Side Menu - Modal === */}

				<Modal
					isVisible={this.state.visibleModal === true}
					animationIn={'slideInLeft'}
					animationOut={'slideOutLeft'}
					onRequestClose={ () => { this.setState({visibleModal: false})} }
					style={{marginLeft: 0, marginTop: 0, marginBottom: 0}} >

						<TouchableOpacity style={styles.modalbg} onPressOut={() => {this.setState({visibleModal: false})} }>
							<TouchableOpacity style={styles.modalContent} activeOpacity={1} >
								<ImageBackground style={{height: Dimensions.get('window').height }} 
									resizeMode='stretch'
									source={require('../../images/side-menu-bg.png')}>
									<View style={styles.modalTop}>
										<View style={{alignItems: 'center'}}>
											<Image style={styles.photo}
													source={require('../../images/carter.png')} />
										</View>

										<View style={{alignItems: 'center'}}>
											<Text style={{color: 'white', fontSize: 14, alignItems: 'center'}}>John Carter</Text>
										</View>

										<View style={{flexDirection: 'row'}}>
											<Image style={{width: 10, height: 12}}
													source={require('../../images/location-icon.png')} 
													resizeMode="contain" />
											<Text style={{color: 'white', fontSize: 10, marginLeft: 5,}}>Arizona United States</Text>
										</View>
									</View>

									<View style={styles.modalUnderTop}>
										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/home-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={(this._goToPhotoCategories)}>
												<Text style={styles.modalItemText}>Home</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, height: 14, marginRight: 10,}}
													source={require('../../images/auction-icon.png')} 
													resizeMode="contain" />

											<TouchableOpacity onPress={this._goToCatcherAuction}>
												<Text style={styles.modalItemText}>Auction</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/events-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={this._goToCatcherEventList}>
												<Text style={styles.modalItemText}>Events</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/dashboard-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={this._goToCatcherDashboard}>
												<Text style={styles.modalItemText}>dashboard</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/profile-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={this._goToCatcherProfile}>
												<Text style={styles.modalItemText}>Profile</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/update-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={this._goToCatcherLatestUpdate}>
												<Text style={styles.modalItemText}>Latest Update</Text>
											</TouchableOpacity>
										</View>

										<View style={styles.modalItemView}>
											<Image style={{width: 14, marginRight: 10,}}
													source={require('../../images/logout-icon.png')} 
													resizeMode="contain" />
											<TouchableOpacity onPress={this._goToCatcherLogout}>
												<Text style={styles.modalItemText}>Logout</Text>
											</TouchableOpacity>
										</View>
									</View>
								</ImageBackground>
							</TouchableOpacity>	
						</TouchableOpacity>	
				</Modal>
			</View>	
		)
	}
}


const styles = StyleSheet.create({
  container : {
		backgroundColor : '#ffffff',
		flex: 1,
	},

	container1: {
		flex: 5,
		alignItems: 'stretch',
		paddingTop: 30,
		paddingLeft: 25,
		paddingRight: 25,
	},

	imageView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 15,
		
	},

	personImage: {
		width: Dimensions.get('window').width / 2 - 40,
		height: Dimensions.get('window').width / 2 - 40,
		borderColor: '#edecea',
	},

	optionImage: {
		width: 40,
		height: 40,
	},

	personImageContent: {
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').width / 2 - 40, 
		opacity: 0.8, 
		backgroundColor: '#1e94b3',
		borderRadius: 5,
		
	},

	itemCenterImage: {
		width: 80,
		height: 80,
		borderRadius: 45,
		borderWidth: 3,
		borderColor: '#ffffff',
		marginBottom: 15,
		marginTop: 10,		
	},

	modalbg: {
		flex: 1,
		backgroundColor: 'transparent',
    justifyContent: 'flex-start',
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},

	modalContent: {
		flex: 1,
		opacity: 1,
		zIndex: 1,
    backgroundColor: '#25a1a1',
		borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-start',
		// marginRight: 200,
		width: Dimensions.get("window").width * 0.45,
		height: Dimensions.get("window").height,
	},
	
	close: {
		justifyContent: 'flex-end',
	},

	modalTop: {
		alignItems: 'center',
		
	},
	
	modalUnderTop: {
		alignItems: 'stretch',
		marginTop: 15,
	},

	modalItemText: {
		color: 'white',
		fontSize: 12,
		marginTop: 2,
	},

	modalItemView: {
		alignItems: 'stretch',
		borderTopWidth: 1,
		borderColor: '#8ec4d0',
		flexDirection: 'row',
		paddingLeft: 20,
		paddingTop: 5,
		paddingBottom: 5,
	},

	photo: {
		borderWidth: 5,
		borderRadius: 50,
		borderColor: '#2293b5',
		width: 75,
		height: 75,
		marginTop: 30,
		
	},

	button: {
		justifyContent: 'center',
		borderRadius: 5,
		flexDirection: 'row',
	},

	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		paddingBottom: 13,
		paddingTop: 13,
		color: 'white',
		fontWeight: 'bold',
		marginLeft: 10,
	},
});


