import 'dart:async';

import 'package:BLoC/src/bloc/base_bloc.dart';
import 'package:BLoC/src/bloc/session.dart';
import 'package:BLoC/src/repository/preferences/preferences_interface.dart';
import 'package:rxdart/rxdart.dart';

class LoginBloc extends BaseBloc {

  final String _emailDomain = "@digital-nomad.hr";
  PreferencesInterface _preferencesInterface;
  Session session;

  LoginBloc(this._preferencesInterface, this.session){
    _loginSubject.stream.listen(_handleLogin);
    if(_preferencesInterface.defaultUsername != null)
      // ignore: curly_braces_in_flow_control_structures
      usernameSink.add(_preferencesInterface.defaultUsername);
  }

  //Public
  final _username = BehaviorSubject<String>(seedValue: "");
  Sink<String> get usernameSink => _username.sink;
  Stream<String> get usernameStream => _username.stream;

  final _password = BehaviorSubject<String>(seedValue: "");
  Sink<String> get passwordSink => _password.sink;
  Stream<String> get passwordStream => _password.stream;

  final _loginSubject = BehaviorSubject<bool>();
  Sink<bool> get loginSink => _loginSubject.sink;

  final _loginError = BehaviorSubject<int>(seedValue: -1);
  Stream<int> get loginErrorStream => _loginError.stream;

  //Private
  void _handleLogin(bool doLogin){
    if(!doLogin) return;

    final username = _username.value;
    final password = _password.value;

    if(username.toString().isEmpty)
      // ignore: curly_braces_in_flow_control_structures
      _loginError.add(0);
    else
      // ignore: curly_braces_in_flow_control_structures
      _loginError.add(-1);

    if(_loginError.value >= 0) return;

    if(password.isEmpty)
      // ignore: curly_braces_in_flow_control_structures
      _loginError.add(1);
    else
      // ignore: curly_braces_in_flow_control_structures
      _loginError.add(-1);

    if(_loginError.value >= 0) return;

    passwordSink.add("");

    final correctUsername = username + _emailDomain;
    showProgress.add(true);
    Observable.fromFuture(session.signIn(correctUsername, password))
        .doOnDone( () => showProgress.add(false) )
        .listen( (firebaseUserId) {
      session.userId = firebaseUserId;
      _saveDefaultUsername(username);
      session.signedIn.add(true);
    },
        onError: (err) {
          session.signedIn.add(false);
          error.add(err.message);
        });
  }

  void _saveDefaultUsername(String username){
    _preferencesInterface.setDefaultUsername(username);
  }

  @override
  void dispose() {
    _username.close();
    _password.close();
    _loginSubject.close();
    _loginError.close();
    super.dispose();
  }
}