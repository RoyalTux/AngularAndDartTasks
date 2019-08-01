import 'package:rxdart/rxdart.dart';
import 'package:meta/meta.dart';
import 'package:BLoC/src/bloc/endpoints.dart';
import 'package:BLoC/src/bloc/model/todo_bloc.dart';

abstract class ToDoRepository {

  @protected
  Endpoints endpoints;

  ToDoRepository(this.endpoints);

  Observable<List<TodoBloc>> getToDos();
  Observable<TodoBloc> getTodo(String todoId);
  Observable<dynamic> addUpdateToDo(TodoBloc todoBloc);
  Observable<void> deleteToDoBloc(String todoId);
}
