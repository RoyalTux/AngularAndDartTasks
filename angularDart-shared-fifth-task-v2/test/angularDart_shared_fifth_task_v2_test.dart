import 'dart:developer';

import 'package:angularDart_shared_fifth_task_v2/angularDart_shared_fifth_task_v2.dart';
import 'package:test/test.dart';

void main() {
  group('A group of tests', () {
    ApiService service;

    setUp(() {
      service = Service() as ApiService;
    });

    test('First Test', () {
      expect(service, isNotNull);
    });
  });
}
