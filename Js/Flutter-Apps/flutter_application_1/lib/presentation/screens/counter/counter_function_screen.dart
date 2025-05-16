import 'package:flutter/material.dart';

class CounterFunctionScreen extends StatefulWidget {
  const CounterFunctionScreen({super.key});

  @override
  State<CounterFunctionScreen> createState() => _CounterFunctionScreenState();
}

class _CounterFunctionScreenState extends State<CounterFunctionScreen> {
  int clicks = 0; // Initial value for clicks
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Counter Function Screen'),
        centerTitle: true,
        actions: [
          IconButton(
            onPressed: () {
              setState(() {
                clicks = 0; // Reset the clicks counter
              });
            },
            icon: const Icon(Icons.refresh_rounded),
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '$clicks',
              style: TextStyle(fontSize: 160, fontWeight: FontWeight.w100),
            ),
            Text(
              clicks == 1
                  ? 'Click'
                  : 'Clicks!!', // Conditional text based on clicks
              style: TextStyle(fontSize: 25),
            ),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          CustomButton(
            icon: Icons.refresh_rounded,
            onPressed: () {
              setState(() {
                clicks = 0; // Reset the clicks counter
              });
            },
          ), // Custom button with icon
          SizedBox(height: 10), //
          CustomButton(
            icon: Icons.plus_one,
            onPressed: () {
              setState(() {
                clicks++; // Increment the clicks counter
              });
            },
          ), // Custom button with icon
          SizedBox(height: 10), //
          CustomButton(icon: Icons.exposure_minus_1), // Custom button with icon
        ],
      ),
    );
  }
}

class CustomButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onPressed;

  const CustomButton({super.key, required this.icon, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      shape: const StadiumBorder(),
      onPressed: onPressed,
      child: Icon(icon),
    );
  }
}
