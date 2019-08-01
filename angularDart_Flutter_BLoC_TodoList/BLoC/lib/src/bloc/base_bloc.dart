import 'dart:async';
import 'package:rxdart/rxdart.dart';

class BaseBloc {

  final BehaviorSubject<bool> _progressVisible = BehaviorSubject<bool>(seedValue: false);
  final BehaviorSubject<String> _error = BehaviorSubject<String>(seedValue: "");

  Sink<String> get error => _error.sink;
  Stream<String> get errorStream => _error.stream;

  Sink<bool> get showProgress => _progressVisible.sink;
  Stream<bool> get progressVisible => _progressVisible.stream;

  void dispose() {
    _progressVisible.close();
    _error.close();
  }
}