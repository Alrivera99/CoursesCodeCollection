import 'package:flutter/material.dart';

class MessageFieldBox extends StatelessWidget {
  const MessageFieldBox({super.key});

  @override
  Widget build(BuildContext context) {
    final textController = TextEditingController();

    final outlineInputBorder = UnderlineInputBorder(
      borderSide: const BorderSide(color: Colors.transparent),
      borderRadius: BorderRadius.circular(40),
    );

    final inputDecoration = InputDecoration(
      enabledBorder: outlineInputBorder,
      focusedBorder: outlineInputBorder,
      filled: true,
      hintText: 'Escribe un mensaje...',
      contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      suffixIcon: IconButton(
        icon: const Icon(Icons.send),
        onPressed: () {
          final textValue = textController.value.text;
          print('Enviando mensaje: $textValue');
          textController.clear();
        },
      ),
    );

    return TextFormField(
      onTapOutside: (event) {
        FocusNode().unfocus(); // Desenfoca el campo de texto al tocar fuera de él
      },
      focusNode: FocusNode(),
      controller: textController,
      decoration: inputDecoration,
      onFieldSubmitted: (value) {
        textController.clear();
        FocusNode().requestFocus();
        // Aquí puedes manejar el envío del mensaje al presionar Enter
      },
    );
  }
}
